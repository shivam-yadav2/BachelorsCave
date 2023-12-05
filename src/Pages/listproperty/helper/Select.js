import { useDispatch, useSelector } from "react-redux";
import classes from "./Select.module.css";
import React, { useState, useEffect } from "react";
import { validationActions } from "../../../store/validation-slice";
import { propertydataActions } from "../../../store/propertydata-slice";
import { searchActions } from "../../../store/search-slice";
const Select = ({
  id,
  label,
  options,
  className,
  selected,
  src,
  disabled,
  validation,
  search,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("select");
  const { isTouched } = useSelector((state) => {
    if (search) {
      return state.search;
    } else return state.validation;
  });
  let exValid = { state: true, errMsg: "" };
  if (validation) {
    exValid = validation(value);
  }

  const isValid =
    value !== "select" &&
    (validation ? (exValid ? exValid.state : true) : true);

  const hasError = isTouched && !isValid;

  const preValue = useSelector((state) => {
    if (search) {
      return state.search.searchData[id];
    } else {
      return state.propertydata.propertydata[id][label];
    }
  });

  useEffect(() => {
    if (preValue) {
      setValue(preValue);
    }
  }, [setValue]);
  useEffect(() => {
    if (selected) {
      setValue(selected);
    }
  }, [setValue, selected]);

  const openDropDownHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const valueChangeHandler = (item) => {
    setValue(item);
  };
  const selectBlurHandler = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (!search)
      dispatch(
        validationActions.setFeildValidity({ id: label, isValid: isValid })
      );
    else dispatch(searchActions.setValidity({ id, isValid }));
  }, [dispatch, isValid, label]);
  useEffect(() => {
    if (!search)
      dispatch(
        propertydataActions.setPropertyData({
          id: id,
          name: label,
          value: value,
        })
      );
    else dispatch(searchActions.setSearchData({ id, value }));
  }, [dispatch, value]);
  return (
    <div
      className={`relative ${className ? className : ""} ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${classes["prevent-select"]}`}
      tabIndex={0}
      onBlur={selectBlurHandler}
    >
      <p className="font-[500] text-sm md:text-base">{label}</p>
      <div
        className={`flex space-x-2 justify-between mt-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-lg  border ${
          hasError ? "bg-red-50 border-red-500" : "bg-gray-50"
        } text-sm md:text-base`}
        onClick={() => !disabled && openDropDownHandler()}
      >
        <div className="flex items-center space-x-4">
          {src && <img src={src} className="w-8" />}

          <p>{value}</p>
        </div>
        <img
          src={
            disabled
              ? require("../../../assets/disabled.png")
              : require("../../../assets/down-arrow.png")
          }
          className={`${disabled ? "w-6" : "w-3"} ${
            isOpen ? "rotate-180" : ""
          } duration-300`}
        />
      </div>
      <ul
        className={`absolute z-10 top-full left-0 right-0 max-h-64 overflow-y-auto bg-white ${
          isOpen ? "block" : "hidden"
        } border rounded-lg`}
      >
        {options.map((item) => (
          <li
            className={`px-2 py-1 md:px-4 md:py-2 text-sm md:text-base${
              item === value ? " bg-gray-200" : " hover:bg-gray-100"
            } `}
            key={item}
            onClick={() => {
              valueChangeHandler(item);
              setIsOpen(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {hasError && (
        <p className="px-2 text-xs text-red-500 md:text-sm">
          {validation
            ? exValid.errMsg !== ""
              ? exValid.errMsg
              : "required!"
            : "required!"}
        </p>
      )}
    </div>
  );
};
export default Select;
