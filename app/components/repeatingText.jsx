

export const TextDividerPageSample = () => (
    <div className="">

    </div>
)


export const RepeatingText = ({content, containsParagraph}) => {
    return (
        <div className="text-[#dafaaa] py-10">
            
            <p>
                {
                containsParagraph 
                &&
                <span className="text-[#e6e5e6] text-[20px] md:text-[22px]">Sample question to Next Gem AI:</span>
                }
                {content ?? 'DYOR has never been so important: allow us to build the necessary tools to assist you.'}
                
            </p>
            
            <div className="h-divider">
                <div className="shadow"></div>
            </div>
                

        </div>
    )
}