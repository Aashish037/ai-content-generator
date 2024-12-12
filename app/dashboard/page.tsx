"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {

    const[userSearchInput, setUserSearchInput] = useState<string>('')

    return (
        <div>
            {/* serach seaction */}
            <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>


            {/* content Section */}
            <TemplateListSection userSearchInput={userSearchInput} />
        </div>
    )
}

export default Dashboard
