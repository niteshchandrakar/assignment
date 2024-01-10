import PieGraph from "./Pie";
import { DataObj } from "../Redux/data";
import { useDispatch } from "react-redux";
import { CHANGE_DATA } from "../Redux/Actiontype";
import { Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import "./Chart.css"
import Chart from "./Chart";

const Home = () => {
    const dispatch = useDispatch()
    const onDateChange =(e)=>{
let payload  = DataObj[e.target.value];

let emmissions = payload?.map((ele)=>ele.Emissions)
let revenue = payload?.map((ele)=>ele.Revenue)
dispatch({type:CHANGE_DATA,payload:{emmissions,revenue}})
    }
  return (
    <div className="main">
      <div className="top">
        <div className="st">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z"
              fill="#02AB6C"
            />
            <path
              d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z"
              fill="#02AB6C"
            />
          </svg>
          <span>Category-1</span>
        </div>
        <div className="end">
          <img
            src="https://s3-alpha-sig.figma.com/img/b270/0d23/767117420f0f997824b701ee2fce525b?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VudgOdkW0zl8pPArArVOc65YBNtxwpA4q3XxPaygHYLxJ2vjk11VE4LAgyOGFV~qRoBrgfmQbdSXAy-9dK8p0XMbSqWoKGZGkL3cWKePbms~GawOl5pMEuHpTHTpK8B41qZQ5vMsTnJsrMzmV8jBuWokBrTK4-7S3N0JHsByWUMQnm5x9cFV7ivufrgz-FgvlV5xLpiR1wZgFSvdP4bz2ej3np~R7FVS1DRpnnKAvkdlysnEZZUO3E7SkCLqzdfu7s4haG0IBQUyKJgi14pwj~B1Hp1z-RxFC28veWJX0mblNSMbhJ5PLUzaVRo02kOJc3QZNTNnOIPtGOZAE8vbMw__"
            alt="image"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5 8L12 16L19 8H5Z"
              fill="#474444"
            />
          </svg>
          <svg
            className="svgImg"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.00011 6.10352e-05C9.47935 0.00258418 9.94313 0.16989 10.3136 0.473895C10.6841 0.7779 10.9387 1.2001 11.0348 1.66962C11.812 1.88784 12.5381 2.22245 13.192 2.65612C13.9665 3.16599 13.1969 4.32568 12.4258 3.81165C11.764 3.36929 11.0231 3.0588 10.2436 2.8972C9.8626 2.82654 9.652 2.46353 9.6901 2.07697C9.7289 1.68209 9.39568 1.38005 9.00011 1.38005C8.60454 1.38005 8.27409 1.68071 8.30457 2.09013C8.33298 2.47808 8.11822 2.82446 7.75105 2.89582C4.91557 3.47635 2.76384 5.99663 2.76384 9.006V12.8308C2.76384 12.9385 2.73869 13.0448 2.69041 13.1411L1.45244 15.6212C1.20997 16.1068 1.52865 16.6216 2.07247 16.6222H15.925C16.4702 16.6236 16.7909 16.1082 16.5471 15.6212L15.3043 13.1411C15.256 13.0448 15.2308 12.9385 15.2308 12.8308V9.006C15.2311 7.78469 14.8695 6.59067 14.1917 5.57474C13.679 4.80369 14.8373 4.03611 15.3472 4.80854C16.1746 6.05206 16.6162 7.51235 16.6164 9.006V12.6673L17.7871 15.0019C18.4647 16.359 17.4401 18.0099 15.9236 18.0078H12.3905C12.0677 19.5845 10.6655 20.7802 8.99734 20.7802C7.32916 20.7802 5.92701 19.5845 5.60418 18.0078H2.06969C0.556004 18.0057 -0.463053 16.3562 0.213085 15.0012L1.37831 12.6673V9.006C1.37831 5.51932 3.74619 2.56329 6.9613 1.66547C7.05939 1.19655 7.31529 0.775431 7.68631 0.472361C8.05733 0.169291 8.52105 0.00258965 9.00011 6.10352e-05ZM10.9495 18.0078H7.04513C7.18536 18.4136 7.44892 18.7655 7.79895 19.0141C8.14898 19.2628 8.56797 19.3959 8.99734 19.3947C9.4267 19.3959 9.8457 19.2628 10.1957 19.0141C10.5458 18.7655 10.8093 18.4136 10.9495 18.0078Z"
              fill="black"
              fill-opacity="0.84"
            />
          </svg>
          <span className="sp">1</span>
        </div>
      </div>

      <Flex justifyContent={'end'} width={'full'} pt={'10px'}>
      <div className="inp">
       <p>Show Time:</p>
       <select onChange={onDateChange} className="selc">
        <option value='data1' >Jan'23 - Dec'23</option>
        <option   value='data2'>Mar'23 - Aug'23</option>
        <option  value='data3'>Apr'23 - Jun'23</option>
        <option  value='data4'>May'23 - Dec'23</option>
       </select>
    </div>
      </Flex>
    

      <div className="upchart">
        <div className="first">
          <div className="first_one">
            <p className="firstP">
              Purchased goods and Services{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1_76)">
                  <path
                    d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_76">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p className="secP">contribution to Scope3</p>
            <div className="goods">
              <Image
                mt={"25px"}
                w={"80%"}
                src="1.png"
                alt="image"
              />
            </div>
          </div>
          {/* Second col */}
          <div className="first_one">
            <p className="firstPP">
              Purchased good and services to revenue ratio{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1_76)">
                  <path
                    d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_76">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <div className="goods">
              <Image
                mt={"10px"}
                w={"80%"}
                src="2.png"
                alt="image"
              />
            </div>
          </div>

          {/* Third */}
          <div className="first_one">
            <p className="firstP">
              Category-1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_1_76)">
                  <path
                    d="M7.83333 1C11.0551 1 13.6667 3.61158 13.6667 6.83333C13.6667 10.0551 11.0551 12.6667 7.83333 12.6667C4.61158 12.6667 2 10.0551 2 6.83333C2 3.61158 4.61158 1 7.83333 1ZM7.83333 2.16667C6.59566 2.16667 5.40867 2.65833 4.5335 3.5335C3.65833 4.40867 3.16667 5.59566 3.16667 6.83333C3.16667 8.07101 3.65833 9.258 4.5335 10.1332C5.40867 11.0083 6.59566 11.5 7.83333 11.5C9.07101 11.5 10.258 11.0083 11.1332 10.1332C12.0083 9.258 12.5 8.07101 12.5 6.83333C12.5 5.59566 12.0083 4.40867 11.1332 3.5335C10.258 2.65833 9.07101 2.16667 7.83333 2.16667ZM7.8275 5.66667C8.153 5.66667 8.41667 5.93033 8.41667 6.25583V9.24483C8.52787 9.30904 8.61477 9.40815 8.66391 9.52678C8.71305 9.64542 8.72167 9.77695 8.68843 9.90098C8.6552 10.025 8.58197 10.1346 8.48009 10.2128C8.37822 10.291 8.25341 10.3333 8.125 10.3333H7.83917C7.7618 10.3333 7.68518 10.3181 7.6137 10.2885C7.54222 10.2589 7.47727 10.2155 7.42256 10.1608C7.36785 10.1061 7.32446 10.0411 7.29485 9.96963C7.26524 9.89815 7.25 9.82154 7.25 9.74417V6.83333C7.09529 6.83333 6.94692 6.77188 6.83752 6.66248C6.72813 6.55308 6.66667 6.40471 6.66667 6.25C6.66667 6.09529 6.72813 5.94692 6.83752 5.83752C6.94692 5.72813 7.09529 5.66667 7.25 5.66667H7.8275ZM7.83333 3.91667C7.98804 3.91667 8.13642 3.97813 8.24581 4.08752C8.35521 4.19692 8.41667 4.34529 8.41667 4.5C8.41667 4.65471 8.35521 4.80308 8.24581 4.91248C8.13642 5.02188 7.98804 5.08333 7.83333 5.08333C7.67862 5.08333 7.53025 5.02188 7.42086 4.91248C7.31146 4.80308 7.25 4.65471 7.25 4.5C7.25 4.34529 7.31146 4.19692 7.42086 4.08752C7.53025 3.97813 7.67862 3.91667 7.83333 3.91667Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_76">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p className="secP">contribution to Scope3</p>
            <div className="goods">
              <Image
                mt={"25px"}
                w={"80%"}
                src="3.png"
                alt="image"
              />
            </div>
          </div>

          <div className="firstL">
            <p>Total number of reached suppliers</p>
            <p>143</p>
          </div>
        </div>
        <Chart />
        <PieGraph />
      </div>
       
    </div>
  );
};

export default Home;
