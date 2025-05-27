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

} from "./constans";
import { deleteData, getDatas } from "@/lib/fetch";
import { Dispatch } from 'redux';

export type responseApi = {
   id: string;
   name: string;
   email: string;
}

export interface ApiResponse {
   data: responseApi[]
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


// ============================ DELETED DATA =====================================
export const deleteVendor = () => {
   return {
      type: DELETING_VENDOR
   }
}

export const deleteVendorSuccess = ({ vendorId }: { vendorId: string | number }) => {
   return {
      type: DELETE_VENDOR_SUCCESS,
      vendorId
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
            deleteVendorSuccess(res.data.message)
         )
      } catch (error: any) {
         dispatch(deleteVendorError({ error: error.message || 'Failed to fetch managers' }))
      }
   }
}