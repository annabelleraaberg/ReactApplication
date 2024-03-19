import { createContext, useState, useEffect, ReactNode } from "react";
import DriverService from "../services/DriverService";
import IDriver from "../interfaces/IDriver";

interface DriverContextProps {
  driver: IDriver[];
  getById: (id: number) => Promise<IDriver | undefined>;
  editDriver: (driverToUpdate: IDriver) => void;
  getByName: (name: string) => Promise<IDriver[]>;
  deleteDriver: (id: number) => Promise<boolean>;
}

interface DriverProviderProps {
  children: ReactNode;
}

export const DriverContext = createContext<DriverContextProps | null>(null);

export const DriverProvider = ({ children }: DriverProviderProps) => {
  const [driver, setDriver] = useState<IDriver[]>([]);

  useEffect(() => {
    setTimeout(() => {
      getDriverFromService();
    }, 2000);
  }, []);

  const getDriverFromService = async () => {
    try {
      const driverFromService: IDriver[] = await DriverService.getAll();
      setDriver(driverFromService);
    } catch (err) {
      console.log(err);
    }
  };

  const getById = async (id: number): Promise<IDriver | undefined> => {
    try {
      const driverToUpdate = await DriverService.getById(id);
      return driverToUpdate;
    } catch (err) {
      console.log(err);
    }
  };

  const getByName = async (name: string): Promise<IDriver[]> => {
    try {
      const driverName = await DriverService.getByName(name);
      return driverName;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const editDriver = async (driverToUpdate: IDriver) => {
    try {
      await DriverService.putDriver(driverToUpdate);
      getDriverFromService();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteDriver = async (id: number): Promise<boolean> => {
    try {
      const result = await DriverService.deleteById(id);
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <DriverContext.Provider
      value={{ driver, getById, editDriver, getByName, deleteDriver }}
    >
      {children}
    </DriverContext.Provider>
  );
};
