/**
 * Generated by orval v6.4.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from 'react-query'
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody
} from './models'
import { useCustomInstance } from './use-custom-instance'


type AsyncReturnType<
T extends (...args: any) => Promise<any>
> = T extends (...args: any) => Promise<infer R> ? R : any;


/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
        const listPets = useCustomInstance<Pets>();

        return (
    params?: ListPetsParams,
 ) => listPets(
          {url: `/pets`, method: 'get',
        params,
    },
          )
      }
    

export const getListPetsQueryKey = (params?: ListPetsParams,) => [`/pets`, ...(params ? [params]: [])];

    
export const useListPets = <TData = AsyncReturnType<ReturnType<typeof useListPetsHook>>, TError = Error>(
 params?: ListPetsParams, options?: { query?:UseQueryOptions<AsyncReturnType<ReturnType<typeof useListPetsHook>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params);

  const listPets =  useListPetsHook()

  const queryFn: QueryFunction<AsyncReturnType<ReturnType<typeof useListPetsHook>>> = () => listPets(params, );

  const query = useQuery<AsyncReturnType<ReturnType<typeof useListPetsHook>>, TError, TData>(queryKey, queryFn, queryOptions)

  return {
    queryKey,
    ...query
  }
}


/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
        const createPets = useCustomInstance<Pet>();

        return (
    createPetsBody: CreatePetsBody,
 ) => createPets(
          {url: `/pets`, method: 'post',
      data: createPetsBody
    },
          )
      }
    


    export const useCreatePets = <TError = Error,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<AsyncReturnType<ReturnType<typeof useCreatePetsHook>>, TError,{data: CreatePetsBody}, TContext>, }
) => {
      const {mutation: mutationOptions} = options || {}

      const createPets =  useCreatePetsHook()


      const mutationFn: MutationFunction<AsyncReturnType<ReturnType<typeof useCreatePetsHook>>, {data: CreatePetsBody}> = (props) => {
          const {data} = props || {};

          return  createPets(data,)
        }

      return useMutation<AsyncReturnType<typeof createPets>, TError, {data: CreatePetsBody}, TContext>(mutationFn, mutationOptions)
    }
    
/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
        const showPetById = useCustomInstance<Pet>();

        return (
    petId: string,
 ) => showPetById(
          {url: `/pets/${petId}`, method: 'get'
    },
          )
      }
    

export const getShowPetByIdQueryKey = (petId: string,) => [`/pets/${petId}`];

    
export const useShowPetById = <TData = AsyncReturnType<ReturnType<typeof useShowPetByIdHook>>, TError = Error>(
 petId: string, options?: { query?:UseQueryOptions<AsyncReturnType<ReturnType<typeof useShowPetByIdHook>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions} = options || {}

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  const showPetById =  useShowPetByIdHook()

  const queryFn: QueryFunction<AsyncReturnType<ReturnType<typeof useShowPetByIdHook>>> = () => showPetById(petId, );

  const query = useQuery<AsyncReturnType<ReturnType<typeof useShowPetByIdHook>>, TError, TData>(queryKey, queryFn, {enabled: !!(petId), ...queryOptions})

  return {
    queryKey,
    ...query
  }
}


