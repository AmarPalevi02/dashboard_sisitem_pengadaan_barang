import { responseApi } from "./action";
import {
   FETCHING_COUNT_EMPLOYEE,
   FETCHING_COUNT_MANAGER,
   FETCHING_COUNT_PROCUREMENT,
   FETCH_COUNT_EMPLOYEE_SUCCESS,
   FETCH_COUNT_MANAGER_SUCCESS,
   FETCH_COUNT_PROCUREMENT_SUCCESS,
   FETCH_COUNT_EMPLOYEE_ERROR,
   FETCH_COUNT_MANAGER_ERROR,
   FETCH_COUNT_PROCUREMENT_ERROR,
   FETCHING_COUNT_VENDOR,
   FETCHING_COUNT_VENDOR_SUCCESS,
   FETCHING_COUNT_VENDOR_ERROR,
   DELETING_VENDOR,
   DELETE_VENDOR_SUCCESS,
   DELETE_VENDOR_ERROR,
   GET_ALL_DATA_MANAGER,
   GET_ALL_DATA_MANAGER_SUCCESS,
   GET_ALL_DATA_MANAGER_ERROR
} from "./constans";

interface AdminState {
   managerCount: number | null;
   isLoadingManager: boolean;
   errorManager: string | null;
   managers: responseApi[] | null;

   procurmentCount: number | null;
   isLoadingProcurment: boolean;
   errorProcurment: string | null;

   employeeCount: number | null;
   isLoadingEmployee: boolean;
   errorEmployee: string | null;

   vendorCount: number | null,
   isLoadingVendor: boolean,
   errorVendor: string | null,
   deletedVendor: boolean
}

const initialState: AdminState = {
   managerCount: null,
   isLoadingManager: false,
   errorManager: null,
   managers: [],

   procurmentCount: null,
   isLoadingProcurment: false,
   errorProcurment: null,

   employeeCount: null,
   isLoadingEmployee: false,
   errorEmployee: null,

   vendorCount: null,
   isLoadingVendor: false,
   errorVendor: null,
   deletedVendor: false
}

interface ManagerAction {
   type: string;
   countManager?: number;
   error?: string;
   managers?: responseApi[] | null
}

interface ProcurementAction {
   type: string,
   countProcurement?: number,
   errorProcurment?: string
}

interface EmployeeActon {
   type: string,
   countEmployee?: number,
   errorEmployee?: string
}

interface VendorAction {
   type: string,
   countVendor?: number,
   errorVendor?: string,
   deletedVendor?: boolean
}

type AdminAction = ManagerAction | ProcurementAction | EmployeeActon | VendorAction

export default function adminReducer(state = initialState, action: AdminAction) {
   switch (action.type) {
      // ================= fetching data ======================
      case FETCHING_COUNT_MANAGER:
         return {
            ...state,
            isLoadingManager: true,
            errorManager: null
         }
      case FETCH_COUNT_MANAGER_SUCCESS:
         return {
            ...state,
            isLoadingManager: false,
            managerCount: (action as ManagerAction).countManager ?? null,
            errorManager: null
         }
      case FETCH_COUNT_MANAGER_ERROR:
         return {
            ...state,
            isLoadingManager: false,
            errorManager: (action as ManagerAction).error ?? 'Failed to fetch managers',
         }
      case FETCHING_COUNT_PROCUREMENT:
         return {
            ...state,
            isLoadingProcurment: true,
            errorProcurment: null
         }
      case FETCH_COUNT_PROCUREMENT_SUCCESS:
         return {
            ...state,
            isLoadingProcurment: false,
            procurmentCount: (action as ProcurementAction).countProcurement ?? null,
            errorProcurment: null
         }
      case FETCH_COUNT_PROCUREMENT_ERROR:
         return {
            ...state,
            isLoadingProcurment: false,
            errorProcurment: (action as ProcurementAction).errorProcurment ?? 'Failed to fetch managers'
         }
      case FETCHING_COUNT_EMPLOYEE:
         return {
            ...state,
            isLoadingEmployee: true,
            errorEmployee: null
         }
      case FETCH_COUNT_EMPLOYEE_SUCCESS:
         return {
            ...state,
            isLoadingEmployee: false,
            employeeCount: (action as EmployeeActon).countEmployee ?? null,
            errorEmployee: null
         }
      case FETCH_COUNT_EMPLOYEE_ERROR:
         return {
            ...state,
            isLoadingEmployee: false,
            errorEmployee: (action as EmployeeActon).errorEmployee ?? 'Failed to fetch managers'
         }
      case FETCHING_COUNT_VENDOR:
         return {
            ...state,
            isLoadingVendor: true,
            errorVendor: null
         }
      case FETCHING_COUNT_VENDOR_SUCCESS:
         return {
            ...state,
            isLoadingVendor: false,
            vendorCount: (action as VendorAction).countVendor ?? null,
            errorVendor: null
         }
      case FETCHING_COUNT_VENDOR_ERROR:
         return {
            ...state,
            isLoadingVendor: false,
            errorVendor: (action as VendorAction).errorVendor ?? 'Failed to fetch managers'
         }

      // ==================================== Get all datas ==============================
      case GET_ALL_DATA_MANAGER:
         return {
            ...state,
            isLoadingManager: true,
            errorManager: null
         }
      case GET_ALL_DATA_MANAGER_SUCCESS:
         return {
            ...state,
            isLoadingManager: false,
            managers: (action as ManagerAction).managers || []
         }
      case GET_ALL_DATA_MANAGER_ERROR:
         return {
            ...state,
            isLoadingManager: false,
            errorManager: (action as ManagerAction).error ?? 'Failed to get all Manager'
         }

      // ==================================== Deleted Data ===============================
      case DELETING_VENDOR:
         return {
            ...state,
            isLoading: true,
            deletedVendor: false
         }
      case DELETE_VENDOR_SUCCESS:
         return {
            ...state,
            isLoading: false,
            deletedVendor: (action as VendorAction).deletedVendor ?? null,
            errorVendor: null
         }
      case DELETE_VENDOR_ERROR:
         return {
            ...state,
            isLoading: false,
            deletedVendor: false,
            errorVendor: (action as VendorAction).errorVendor ?? 'Failed to deleted vendor'
         }
      default:
         return state
   }
}