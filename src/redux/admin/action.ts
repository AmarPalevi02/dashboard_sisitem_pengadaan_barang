import {
   FETCHING_COUNT_EMPLOYEE,
   FETCHING_COUNT_MANAGER,
   FETCHING_COUNT_PROCUREMENT,
   FETCHING_COUNT_VENDOR,
   FETCH_COUNT_EMPLOYEE_SUCCESS,
   FETCH_COUNT_MANAGER_SUCCESS,
   FETCH_COUNT_PROCUREMENT_SUCCESS,
   FETCHING_COUNT_VENDOR_SUCCESS,
   FETCH_COUNT_EMPLOYEE_ERROR,
   FETCH_COUNT_MANAGER_ERROR,
   FETCH_COUNT_PROCUREMENT_ERROR,
   FETCHING_COUNT_VENDOR_ERROR,
   DELETE_VENDOR_ERROR,
   DELETE_VENDOR_SUCCESS,
   DELETING_VENDOR,
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
   RESET_DELETING_MANAGER,
   DELETING_MANAGER_ERROR,
   DELETING_PROCUREMENT,
   DELETING_PROCUREMENT_SUCCESS,
   DELETING_PROCUREMENT_ERROR,
   RESET_DELETING_PROCUREMENT,
   DELETING_EMPLOYEE,
   DELETING_EMPLOYEE_SUCCESS,
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
   PUT_VENDOR_SUCCESS,
   PUT_VENDOR_ERROR,

} from "./constans";
import { deleteData, getDatas, postData, putData } from "@/lib/fetch";
import { Dispatch } from 'redux';

export type responseApiManager = {
   id: string;
   name: string;
   email: string;
}

export type responseApiProcurement = {
   id: string;
   name: string;
   email: string;
}

export type responseApiEmploye = {
   id: string;
   name: string;
   email: string;
}

export type responseApiVendor = {
   id?: string;
   name: string;
   email: string;
   phone: string;
   address: string
}

export interface ApiResponse {
   data: responseApiManager[] | responseApiProcurement[] | responseApiEmploye[] | responseApiEmploye[]
}


export interface ApiResponseDeleted {
   message: string
}

// ================================ FETCHING COUNT DATA =====================================
export const statrFetchingCountManager = () => {
   return {
      type: FETCHING_COUNT_MANAGER
   }
}

export const successFetchingManager = ({ countManager }: { countManager: number }) => {
   return {
      type: FETCH_COUNT_MANAGER_SUCCESS,
      countManager
   }
}

export const errorFetchingManager = ({ error }: { error: string }) => {
   return {
      type: FETCH_COUNT_MANAGER_ERROR,
      error
   }
}

export const fetchingCountManager = () => {
   return async (dispatch: Dispatch) => {
      dispatch(statrFetchingCountManager())

      try {
         let res = await getDatas('admin/managers')

         dispatch(
            successFetchingManager({ countManager: res.data.data.count })
         )
      } catch (error: any) {
         dispatch(errorFetchingManager({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}


export const statrtFetchingProcurement = () => {
   return {
      type: FETCHING_COUNT_PROCUREMENT
   }
}

export const successFetchingProcurement = ({ countProcurement }: { countProcurement: number }) => {
   return {
      type: FETCH_COUNT_PROCUREMENT_SUCCESS,
      countProcurement
   }
}

export const errorFetchingProcurement = ({ error }: { error: string }) => {
   return {
      type: FETCH_COUNT_PROCUREMENT_ERROR,
      error
   }
}

export const fetchingProcurement = () => {
   return async (dispatch: Dispatch) => {
      dispatch(statrtFetchingProcurement())

      try {
         let res = await getDatas('admin/procutments')

         dispatch(
            successFetchingProcurement({ countProcurement: res.data.data.count })
         )
      } catch (error: any) {
         dispatch(errorFetchingProcurement({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}

export const startFetchingEmployee = () => {
   return {
      type: FETCHING_COUNT_EMPLOYEE
   }
}

export const successFetchingEmployee = ({ countEmployee }: { countEmployee: number }) => {
   return {
      type: FETCH_COUNT_EMPLOYEE_SUCCESS,
      countEmployee
   }
}

export const errorFetchingEmployee = ({ error }: { error: string }) => {
   return {
      type: FETCH_COUNT_EMPLOYEE_ERROR,
      error
   }
}

export const fetchingEmployee = () => {
   return async (dispatch: Dispatch) => {
      dispatch(startFetchingEmployee())

      try {
         let res = await getDatas('admin/employees')
         dispatch(
            successFetchingEmployee({ countEmployee: res.data.data.count })
         )
      } catch (error: any) {
         dispatch(errorFetchingEmployee({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}


export const startFetchingVendor = () => {
   return {
      type: FETCHING_COUNT_VENDOR
   }
}

export const successFetchingVendor = ({ countVendor }: { countVendor: number }) => {
   return {
      type: FETCHING_COUNT_VENDOR_SUCCESS,
      countVendor
   }
}

export const errorFetchingVendor = ({ error }: { error: string }) => {
   return {
      type: FETCHING_COUNT_VENDOR_ERROR,
      error
   }
}

export const fetchingVendor = () => {
   return async (dispatch: Dispatch) => {
      dispatch(startFetchingVendor())

      try {
         let res = await getDatas('admin/countvendors')
         dispatch(
            successFetchingVendor({ countVendor: res.data.data.count })
         )
      } catch (error: any) {
         dispatch(errorFetchingVendor({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}

// =========================== GET ALL DATAS ====================================
export const getAllManager = () => {
   return {
      type: GET_ALL_DATA_MANAGER
   }
}

export const getAllManagerSuccess = (response: ApiResponse) => {
   return {
      type: GET_ALL_DATA_MANAGER_SUCCESS,
      managers: response
   }
}

export const getAllManageError = ({ error }: { error: string }) => {
   return {
      type: GET_ALL_DATA_MANAGER_ERROR,
      error
   }
}

export const getAllManagerAction = () => {
   return async (dispatch: Dispatch) => {
      dispatch(getAllManager())

      try {
         const res = await getDatas('admin/datasmanager')

         dispatch(
            getAllManagerSuccess(res.data.data)
         )
      } catch (error: any) {
         dispatch(getAllManageError({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}


export const getAllProcurement = () => {
   return {
      type: GET_ALL_PROCUREMENT
   }
}

export const getAllProcurementSuccess = (response: ApiResponse) => {
   return {
      type: GET_ALL_PROCUREMENT_SUCCESS,
      procurements: response
   }
}

export const getAllProcurementError = ({ error }: { error: string }) => {
   return {
      type: GET_ALL_PROCUREMENT_ERROR,
      error
   }
}

export const getAllProcurementAction = () => {
   return async (dispatch: Dispatch) => {
      dispatch(getAllProcurement())

      try {
         const res = await getDatas('admin/datasprocurements')

         dispatch(
            getAllProcurementSuccess(res.data.data)
         )
      } catch (error: any) {
         dispatch(getAllProcurementError({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}

export const getAllEmploye = () => {
   return {
      type: GET_ALL_EMPLOYEE
   }
}

export const getAllEmployeSuccess = (response: ApiResponse) => {
   return {
      type: GET_ALL_EMPLOYEE_SUCCESS,
      employes: response
   }
}

export const getAllEmployeError = ({ error }: { error: string }) => {
   return {
      type: GET_ALL_EMPLOYEE_ERROR,
      error
   }
}

export const getAllEmployeAction = () => {
   return async (dispatch: Dispatch) => {
      dispatch(getAllEmploye())

      try {
         const res = await getDatas('admin/datasEmployee')

         dispatch(getAllEmployeSuccess(res.data.data))
      } catch (error: any) {
         dispatch(getAllEmployeError({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}

export const getAllVendor = () => {
   return {
      type: GET_ALL_VENDOR
   }
}

export const getAllVendorSuccess = (response: ApiResponse) => {
   return {
      type: GET_ALL_VENDOR_SUCCESS,
      vendors: response
   }
}

export const getAllVendorError = ({ error }: { error: string }) => {
   return {
      type: GET_ALL_VENDOR_ERROR,
      error
   }
}

export const getAllVendorAction = () => {
   return async (dispatch: Dispatch) => {
      dispatch(getAllVendor())

      try {
         const res = await getDatas('admin/vendor')

         dispatch(getAllVendorSuccess(res.data.data))
      } catch (error: any) {
         dispatch(getAllVendorError({ error: error.message || 'Failed to fetch vendor' }))
      }
   }
}

// ============================ DELETED DATA =====================================
export const deleteVendor = () => {
   return {
      type: DELETING_VENDOR
   }
}

export const deleteVendorSuccess = (message: string) => {
   return {
      type: DELETE_VENDOR_SUCCESS,
      deletedVendor: message
   }
}

export const deleteVendorError = ({ error }: { error: string }) => {
   return {
      type: DELETE_VENDOR_ERROR,
      error
   }
}

export const deleteVendorAction = (vendorId: string | number) => {
   return async (dispatch: Dispatch) => {
      dispatch(deleteVendor())

      try {
         const res = await deleteData(`admin/vendor/${vendorId}`)
         dispatch(
            deleteVendorSuccess(res.data.data.message)
         )
      } catch (error: any) {
         dispatch(deleteVendorError({ error: error.message || 'Failed to deleted vendor' }))
      }
   }
}

export const resetDeletedVendor = () => ({
   type: RESET_DELETED_VENDOR,
});

export const deletingManager = () => {
   return {
      type: DELETING_MANAGER
   }
}

export const deletingManagerSuccess = (masage: string) => {
   return {
      type: DELETING_MANAGER_SUCCESS,
      deletingmassage: masage
   }
}

export const deletedManagerError = ({ error }: { error: string }) => {
   return {
      type: DELETING_MANAGER_ERROR,
      error
   }
}

export const deletingManagerAction = (manageId: string | number) => {
   return async (dispatch: Dispatch) => {
      dispatch(deletingManager())

      try {
         const res = await deleteData(`admin/${manageId}/delet`)

         dispatch(deletingManagerSuccess(res.data.data.message))
      } catch (error: any) {
         dispatch(deletedManagerError({ error: error.message || 'Failed to deleted vendor' }))
      }
   }
}

export const resetDeletingManager = () => {
   return {
      type: RESET_DELETING_MANAGER
   }
}

export const deletingProcurement = () => {
   return {
      type: DELETING_PROCUREMENT
   }
}

export const deletingProcuremnetSuccess = (deletingmessageprocurement: string) => {
   return {
      type: DELETING_PROCUREMENT_SUCCESS,
      deletingmessageprocurement: deletingmessageprocurement
   }
}

export const deletingProcurementErorr = ({ error }: { error: string }) => {
   return {
      type: DELETING_PROCUREMENT_ERROR,
      error
   }
}

export const deletingProcurementAction = (procurementId: string | number) => {
   return async (dispatch: Dispatch) => {
      dispatch(deletingProcurement())

      try {
         const res = await deleteData(`admin/${procurementId}/delet`)

         dispatch(deletingProcuremnetSuccess(res.data.data.message))
      } catch (error: any) {
         dispatch(deletingProcurementErorr({ error: error.message || 'Failed to deleted procurement' }))
      }
   }
}

export const resetDeletingProcurement = () => {
   return {
      type: RESET_DELETING_PROCUREMENT
   }
}

export const deletingEmploye = () => {
   return {
      type: DELETING_EMPLOYEE
   }
}

export const deletingEmployeSuccess = (deletingmassageemploye: string) => {
   return {
      type: DELETING_EMPLOYEE_SUCCESS,
      deletingmassageemploye: deletingmassageemploye
   }
}

export const deletingEmployeError = ({ error }: { error: string }) => {
   return {
      type: DELETING_MANAGER_ERROR,
      error
   }
}

export const deletingEmployeAction = (employeId: string | number) => {
   return async (dispatch: Dispatch) => {
      dispatch(deletingEmploye())

      try {
         const res = await deleteData(`admin/${employeId}/delet`)

         dispatch(deletingEmployeSuccess(res.data.data.message))
      } catch (error: any) {
         dispatch(deletingEmployeError({ error: error.message || 'Failed to deleted procurement' }))
      }
   }
}

export const resetDeletingEmploye = () => {
   return {
      type: RESET_DELETING_EMPLOYEE
   }
}

// =================== Post Data ==========================
export const createUser = () => {
   return {
      type: CREATE_USER
   }
}

export const createUserSucces = (payload: Record<string, any>) => {
   return {
      type: CREATE_USER_SUCCESS,
      payload
   }
}

export const createUserError = ({ error }: { error: string }) => {
   return {
      type: CREATE_USER_ERROR,
      error
   }
}

export const createUserAction = (url: string, payload: Record<string, any>) => {
   return async (dispatch: Dispatch) => {
      dispatch(createUser())

      try {
         const res = await postData(url, payload)
         dispatch(createUserSucces(res.data))
      } catch (error: any) {
         dispatch(createUserError({ error: error.message || 'Failed to create user' }));
      }
   }
}

export const createVendor = () => {
   return {
      type: CREATE_VENDOR
   }
}

export const createVendorSuccess = (payload: Record<string, any>) => {
   return {
      type: CREATE_VENDOR_SUCCESS,
      payload
   }
}

export const createVendorError = ({ error }: { error: string }) => {
   return {
      type: CREATE_VENDOR_ERROR,
      error
   }
}

export const createVendorAction = (url: string, payload: Record<string, any>) => {
   return async (dispatch: Dispatch) => {
      dispatch(createVendor())

      try {
         const res = await postData(url, payload)

         dispatch(createVendorSuccess(res.data))
      } catch (error: any) {
         dispatch(createVendorError({ error: error.message || 'Failed to create vendor' }))
      }
   }
}

// ========================== fetch one data =================================
export const fetchOneVendor = () => {
   return {
      type: FETCH_ONE_VENDOR
   }
}

export const fetchOneVendorSuccess = (respone: responseApiVendor) => {
   return {
      type: FETCH_ONE_VENDOR_SUCCESS,
      vendor: respone
   }
}

export const fetchOneVendorError = ({ error }: { error: string }) => {
   return {
      type: FETCH_ONE_VENDOR_ERROR,
      error
   }
}

export const fetchOneVendorAction = (vendorId: string | number) => {
   return async (dispatch: Dispatch) => {
      dispatch(fetchOneVendor())

      try {
         const res = await getDatas(`admin/vendor/get/${vendorId}`)

         dispatch(fetchOneVendorSuccess(res.data.data))
      } catch (error: any) {
         dispatch(fetchOneVendorError({ error: error.message || 'Failed to get one vendor' }))
      }
   }
}

// ========================== Edit Data ============================================
export const putVendor = () => {
   return {
      type: PUT_VENDOR
   }
}

export const putVendorSuccess = (payload: Record<string, any>) => {
   return {
      type: PUT_VENDOR_SUCCESS,
      payload
   }
}

export const putVendorError = ({ error }: { error: string }) => {
   return {
      type: PUT_VENDOR_ERROR,
      error
   }
}

export const putVendorAction = (url: string, payload: Record<string, any>) => {
   return async (dispatch: Dispatch) => {
      dispatch(putVendor())

      try {
         const res = await putData(url, payload)

         dispatch(putVendorSuccess(res.data))
      } catch (error: any) {
         dispatch(putVendorError({ error: error.message || 'Failed to get one vendor' }))
      }
   }
}