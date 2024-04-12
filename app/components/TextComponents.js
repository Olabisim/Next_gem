
export const WhitepaperQs = ({title, children}) => (
    <div className="py-4">
        <h2 className="text-[#e6e5e6] font-medium text-[22px] md:text-[24px] py-3">{title}</h2>
        <ul className="list-disc pl-7 md:pl-10 text-[17px] md:text-[19px]">
          {children}
        </ul>
    </div>
  )

export const UlHandler = ({children}) => (
    <div className="py-4">
        <ul className="text-[#f2f2f2] list-disc pl-7 md:pl-10 text-[17px] md:text-[19px]">
          {children}
        </ul>
    </div>
  )

export const LiBoost = ({children}) => (
    <li className="py-2">
        {children}
    </li>
  )

  
  export const SupplyStructure = ({title, content}) => (
    <p className="pb-4 text-[16px] md:text-[18px]"><span className="text-[#f1f1f3]">{title}</span>{content}</p>
  )
  
  export const RoundPlanComponent = ({title, heading1, heading2, content1, content2}) => (
    <div className="py-20 pt-32">
      <h2 className="text-[#f1f1f3] py-4 text-[22px] md:text-[24px]">{title}</h2>
      <h5 className="text-[#d6d6dc] py-2 text-[18px] md:text-[20px]">{heading1}</h5>
      <p className="text-[16px] md:text-[18px]">{content1}</p>
      <h5 className="text-[#d6d6dc] py-2 text-[18px] md:text-[20px]">{heading2}</h5>
      <p className="text-[16px] md:text-[18px]">{content2}</p>
    </div>
  )
  
  
  export const HeaderText = ({header, description}) => {
    return (
      <div className="text-[#f1f1f3] pt-10 pb-5">
         <div className=" py-5 uppercase">
            <h3 className="font-bold text-[28px] md:text-[32px] bg-gradient-to-t from-[#000] via-[#dad8da] to-[#f2f2f2] inline-block text-transparent bg-clip-text">{header}</h3>
        </div>
        {/* <h2 className="text-[28px] md:text-[32px] uppercase py-5 font-bold">{header}</h2> */}
        <p className="text-[22px] md:text-[24px]">{description}</p>
      </div>
    )
  }
  
  export const MainHeaderText = ({header, title, description}) => {
    return (
      <div className="text-[#f1f1f3] pt-20 pb-5">
        <h2 className="font-bold text-[36px] md:text-[44px] bg-gradient-to-t from-[#000] via-[#f2f2f2] to-[#f2f2f2] inline-block text-transparent bg-clip-text">{header}</h2>
        {/* <h2 className="text-[36px] md:text-[44px] font-bold py-2">{header}</h2> */}
        <div className=" py-5 uppercase">
            <h3 className="font-semibold text-[28px] md:text-[32px] bg-gradient-to-t from-[#000] via-[#dad8da] to-[#f2f2f2] inline-block text-transparent bg-clip-text">{title}</h3>
        </div>
        {/* <h3 className="text-[28px] md:text-[32px] uppercase py-5 font-medium">{title}</h3> */}
        <p  className="text-[22px] md:text-[24px]">{description}</p>
      </div>
    )
  }
  
  export const ParagraphComponent = ({content, children, white, minimal, moreMinimial}) => {
    return (
      <p className={`${ white && 'text-[#d6d6dc]'} text-[18px] md:text-[20px] ${moreMinimial && 'py-1 md:py-2'} ${minimal && 'py-3 md:py-4'} py-6 md:py-8`}>
          <span>{children}</span>
          {content}
      </p>
    )
  }
  
  export const ParagraphComponentEnd = ({content, children, white, minimal}) => {
    return (
      <p className={`${ white && 'text-[#e6e5e6]'} text-[18px] md:text-[20px] ${minimal && 'py-3 md:py-4'} py-6 md:py-8`}>
          {content}
          <span>{children}</span>
      </p>
    )
  }

  export const SpanSpaceBottom = ({content}) => (
    <p className="py-3 text-[#cccbcd]">
        {content}
    </p>
  )