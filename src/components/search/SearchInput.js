import React, { FC, useCallback, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoIosClose } from 'react-icons/io'

// interface SearchBoxProps {
//   searchValue: string
//   handleChange: (newValue: string) => void
//   type?: string
//   placeHolder?: string
//   style?: string
// }
const SearchInput = ({
  searchValue,
  handleChange,
  type = 'text',
  placeHolder,
  style,
}) => {
  const inputRef = useRef(null)

  const handleClearInputClick = useCallback(
    (param) => {
      handleChange(param)
      inputRef.current?.focus()
    },
    [handleChange, inputRef]
  )

  const handleInputChange = useCallback(
    (event) => {
      handleChange(event.target.value)
    },
    [handleChange]
  )

  return (
    <div className="relative flex items-center font-bold">
      <BiSearch className="absolute m-3 text-stone-500" />
      <input
        className={
          style
            ? style
            : 'rounded1-md border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-[32px] w-[280px] items-center rounded-lg border bg-transparent bg-white px-12 py-4 text-sm font-normal file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
        }
        type={type}
        value={searchValue}
        onChange={handleInputChange}
        ref={inputRef}
        placeholder={placeHolder}
      />
      {searchValue.length > 0 && (
        <IoIosClose
          className="absolute right-0 m-3 h-5 w-5"
          onClick={() => handleClearInputClick('')}
        />
      )}
    </div>
  )
}

export default SearchInput
