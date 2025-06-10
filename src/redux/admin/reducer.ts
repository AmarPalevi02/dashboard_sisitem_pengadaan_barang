import { type } from 'os';
import {
   responseAccountUser,
   responseApiEmploye,
   responseApiManager,
   responseApiProcurement,
   responseApiVendor
} from "./action";
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
   GET_ALL_DATA_MANAGER_ERROR,
   GET_ALL_PROCUREMENT,
   GET_ALL_PROCUREMENT_SUCCESS,
   GET_ALL_PROCUREMENT_ERROR,
   GET_ALL_EMPLOYEE,
   GET_ALL_EMPLOYEE_SUCCESS,
   GET_ALL_EMPLOYEE_ERROR,
   GET_ALL_VENDOR,
   GET_ALL_VENDOR_SUCCESS,
   GET_ALL_VENDOR_ERROR,
   RESET_DELETED_VENDOR,
   DELETING_MANAGER,
   DELETING_MANAGER_SUCCESS,
   DELETING_MANAGER_ERROR,
   RESET_DELETING_MANAGER,
   DELETING_PROCUREMENT,
   DELETING_PROCUREMENT_SUCCESS,
   DELETING_PROCUREMENT_ERROR,
   RESET_DELETING_PROCUREMENT,
   DELETING_EMPLOYEE,
   DELETING_EMPLOYEE_SUCCESS,
   DELETING_EMPLOYEE_ERROR,
   RESET_DELETING_EMPLOYEE,
   CREATE_USER,
   CREATE_USER_SUCCESS,
   CREATE_USER_ERROR,
   CREATE_VENDOR,
   CREATE_VENDOR_SUCCESS,
   CREATE_VENDOR_ERROR,
   FETCH_ONE_VENDOR,
   FETCH_ONE_VENDOR_SUCCESS,
   FETCH_ONE_VENDOR_ERROR,
   PUT_VENDOR,
   FETCH_USER,
   FETCH_USER_SUCCESS,
   FETCH_USER_ERROR,
} from "./constans";

interface AdminState {
   user: responseAccountUser | null,
   isLoadingUser: boolean,
   isErrorUser: string | null

   managerCount: number | null;
   isLoadingManager: boolean;
   errorManager: string | null;
   managers: responseApiManager[];
   deletingmassage: string | null;

   procurmentCount: number | null;
   isLoadingProcurment: boolean;
   errorProcurment: string | null;
   procurements: responseApiProcurement[];
   deletingmessageprocurement: string | null;

   employeeCount: number | null;
   isLoadingEmployee: boolean;
   errorEmployee: string | null;
   employes: responseApiEmploye[];
   deletingmassageemploye: string | null

   vendorCount: number | null,
   isLoadingVendor: boolean,
   errorVendor: string | null,
   deletedVendor: string | null,
   vendors: responseApiVendor[],
   vendor: responseApiVendor | null
   putVendor: responseApiVendor | null

   isloadingCreateVendor: boolean,
   errorCreateVendor: string | null,
   createVendor: any | null

   loadingCretaeUser: boolean,
   createUser: any | null;
   errorCreateUser: string | null;
}

const initialState: AdminState = {
   user: null,
   isLoadingUser: false,
   isErrorUser: null,

   managerCount: null,
   isLoadingManager: false,
   errorManager: null,
   managers: [],
   deletingmassage: null,

   procurmentCount: null,
   isLoadingProcurment: false,
   errorProcurment: null,
   procurements: [],
   deletingmessageprocurement: null,

   employeeCount: null,
   isLoadingEmployee: false,
   errorEmployee: null,
   employes: [],
   deletingmassageemploye: null,

   vendorCount: null,
   isLoadingVendor: false,
   errorVendor: null,
   deletedVendor: null,
   vendors: [],
   vendor: null,
   putVendor: null,

   loadingCretaeUser: false,
   createUser: null,
   errorCreateUser: null,

   isloadingCreateVendor: false,
   errorCreateVendor: null,
   createVendor: null
}

interface ManagerAction {
   type: string;
   countManager?: number;
   error?: string;
   managers?: responseApiManager[] | null,
   deletingmassage?: string
}

interface ProcurementAction {
   type: string,
   countProcurement?: number,
   errorProcurment?: string,
   procurements?: responseApiProcurement[],
   deletingmessageprocurement?: string
}

interface EmployeeActon {
   type: string,
   countEmployee?: number,
   errorEmployee?: string,
   employes?: responseApiEmploye[] | null,
   deletingmassageemploye?: string
}

interface UserAction {
   type: string,
   user: responseAccountUser | null,
   isErrorUser: string | null
}

interface VendorAction {
   type: string,
   countVendor?: number,
   errorVendor?: string,
   deletedVendor?: string,
   vendors?: responseApiVendor[] | null,
   vendor?: responseApiVendor | null,
   putVendor: responseApiVendor | null
}

interface CreateType {
   type: string;
   loading: boolean;
   error: string | null;
}

interface CreateUserAction extends CreateType {
   user: any | null;
}

interface CreateVendorAction extends CreateType {
   vendor: any | null;
}

type AdminAction = ManagerAction | UserAction | ProcurementAction | EmployeeActon | VendorAction | CreateUserAction | CreateVendorAction

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
      case GET_ALL_PROCUREMENT:
         return {
            ...state,
            isLoadingProcurment: true,
            errorProcurment: null
         }
      case GET_ALL_PROCUREMENT_SUCCESS:
         return {
            ...state,
            isLoadingProcurment: false,
            procurements: (action as ProcurementAction).procurements || []
         }
      case GET_ALL_PROCUREMENT_ERROR:
         return {
            ...state,
            isLoadingProcurment: false,
            errorProcurment: (action as ProcurementAction).errorProcurment ?? 'Failed to get all Procuremnet'
         }
      case GET_ALL_EMPLOYEE:
         return {
            ...state,
            isLoadingEmployee: true,
            errorVendor: null
         }
      case GET_ALL_EMPLOYEE_SUCCESS:
         return {
            ...state,
            isLoadingEmployee: false,
            employes: (action as EmployeeActon).employes || []
         }
      case GET_ALL_EMPLOYEE_ERROR:
         return {
            ...state,
            isLoadingEmployee: false,
            employes: (action as EmployeeActon).errorEmployee ?? 'Failed to get all employes'
         }
      case GET_ALL_VENDOR:
         return {
            ...state,
            isLoadingVendor: true,
            errorVendor: null
         }
      case GET_ALL_VENDOR_SUCCESS:
         return {
            ...state,
            isLoadingVendor: false,
            vendors: (action as VendorAction).vendors || [],
            errorVendor: null
         }
      case GET_ALL_VENDOR_ERROR:
         return {
            ...state,
            isLoadingVendor: false,
            errorVendor: (action as VendorAction).errorVendor ?? 'Failed to get all vendor'
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
      case RESET_DELETED_VENDOR:
         return {
            ...state,
            isLoading: false,
            deletedVendor: null,
            errorVendor: null
         }
      case DELETING_MANAGER:
         return {
            ...state,
            isLoadingManager: true,
            errorManager: null
         }
      case DELETING_MANAGER_ERROR:
         return {
            ...state,
            isLoadingManager: false,
            errorManager: (action as ManagerAction).error ?? 'Failed to deleted manager'
         }
      case DELETING_MANAGER_SUCCESS:
         return {
            ...state,
            isLoadingManager: false,
            deletingmassage: (action as ManagerAction).deletingmassage ?? null
         }
      case RESET_DELETING_MANAGER:
         return {
            ...state,
            isLoadingManager: false,
            deletingmassage: null,
            errorManager: null
         }
      case DELETING_PROCUREMENT:
         return {
            ...state,
            isLoadingProcurment: true,
            errorProcurment: null
         }
      case DELETING_PROCUREMENT_SUCCESS:
         return {
            ...state,
            isLoadingProcurment: false,
            deletingmessageprocurement: (action as ProcurementAction).deletingmessageprocurement ?? null
         }
      case DELETING_PROCUREMENT_ERROR:
         return {
            ...state,
            isLoadingProcurment: false,
            errorProcurment: (action as ProcurementAction).errorProcurment ?? 'Failed to deleted procurement'
         }
      case RESET_DELETING_PROCUREMENT:
         return {
            ...state,
            isLoadingProcurment: false,
            deletingmessageprocurement: null,
            errorProcurment: null
         }
      case DELETING_EMPLOYEE:
         return {
            ...state,
            isLoadingEmployee: true,
            errorEmployee: null
         }
      case DELETING_EMPLOYEE_SUCCESS:
         return {
            ...state,
            isLoadingEmployee: false,
            deletingmassageemploye: (action as EmployeeActon).deletingmassageemploye ?? null,
            errorEmployee: null
         }
      case DELETING_EMPLOYEE_ERROR:
         return {
            ...state,
            isLoadingEmployee: false,
            errorEmployee: (action as EmployeeActon).errorEmployee ?? 'Failed to deleted procurement'
         }
      case RESET_DELETING_EMPLOYEE:
         return {
            ...state,
            isLoadingEmployee: false,
            deletingmassageemploye: null,
            errorEmployee: null
         }
      // ==================== create User ========================
      case CREATE_USER:
         return {
            ...state,
            loadingCretaeUser: true,
            errorCreateUser: null
         }
      case CREATE_USER_SUCCESS: {
         return {
            ...state,
            loadingCretaeUser: false,
            createUser: (action as CreateUserAction).user ?? null
         }
      }
      case CREATE_USER_ERROR:
         return {
            ...state,
            loadingCretaeUser: false,
            errorCreateUser: (action as CreateUserAction).error || 'Failed to create user'
         }
      case CREATE_VENDOR:
         return {
            ...state,
            isloadingCreateVendor: true,
            errorCreateVendor: null,
            createVendor: null
         }
      case CREATE_VENDOR_SUCCESS:
         return {
            ...state,
            isloadingCreateVendor: false,
            createVendor: (action as CreateVendorAction).vendor ?? null
         }
      case CREATE_VENDOR_ERROR:
         return {
            ...state,
            isloadingCreateVendor: false,
            errorCreateVendor: (action as CreateVendorAction).error || 'Failed to create vendor'
         }
      // =================== fetch one data ====================
      case FETCH_ONE_VENDOR:
         return {
            ...state,
            isLoadingVendor: true,
            errorVendor: null
         }
      case FETCH_ONE_VENDOR_SUCCESS:
         return {
            ...state,
            isLoadingVendor: false,
            vendor: (action as VendorAction).vendor ?? null
         }
      case FETCH_ONE_VENDOR_ERROR:
         return {
            ...state,
            isLoadingVendor: false,
            errorVendor: (action as VendorAction).errorVendor || 'Failed to get one vendor'
         }
      case FETCH_USER:
         return {
            ...state,
            isLoadingUser: true,
            isErrorUser: null
         }
      case FETCH_USER_SUCCESS:
         return {
            ...state,
            isLoadingUser: false,
            user: (action as UserAction).user ?? null
         }
      case FETCH_USER_ERROR:
         return {
            ...state,
            isLoadingUser: true,
            isErrorUser: (action as UserAction).isErrorUser || 'Failed to get one user'
         }

      // ============================== put data ==========================================
      case PUT_VENDOR:
         return {
            ...state,
            isLoadingVendor: true,
            errorCreateVendor: null,
            putVendor: null
         }
      case CREATE_VENDOR_SUCCESS:
         return {
            ...state,
            isLoadingVendor: false,
            putVendor: (action as VendorAction).putVendor ?? null
         }
      case CREATE_VENDOR_ERROR:
         return {
            ...state,
            isLoadingVendor: false,
            errorVendor: (action as VendorAction).errorVendor || 'Failed to create vendor'
         }
      default:
         return state
   }
}