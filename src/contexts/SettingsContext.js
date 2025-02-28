

import {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'



export const SettingsContext = createContext(
  null
)

export function SettingsProvider({
  children,
}) {



  const providerValue = useMemo(() => {
    return {

    }
  }, [

  ])

  return (
    <SettingsContext.Provider value={providerValue}>
      {children}
    </SettingsContext.Provider>
  )
}

/* eslint-disable react/display-name */

// export const useSearchPage = () => useContext(SearchPageContext)!

// export const withSearchPageProvider = (Component: () => JSX.Element) => {
//   return function () {
//     return (
//       <SearchPageProvider>
//         <Component />
//       </SearchPageProvider>
//     )
//   }
// }

export default memo(SettingsProvider)
