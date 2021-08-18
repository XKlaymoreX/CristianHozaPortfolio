import React from 'react'

const SkillComponent : React.FC<{key: string,skill:string,className:string}> = ({key,skill,className}) => {
    return (
        <div key={key} className={className}>
            {skill.toString()}
        </div>
    )
}

export default SkillComponent
