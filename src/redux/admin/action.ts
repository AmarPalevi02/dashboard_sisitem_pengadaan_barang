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
   FETCHING_COUNT_VENDOR_ERROR
} from "./constans";
import { getDatas } from "@/lib/fetch";
import { Dispatch } from 'redux';

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