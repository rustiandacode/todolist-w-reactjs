import React, { useState } from 'react'

const MergeString = () => {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [fullName, setfullname] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setfullname(`${firstName} ${lastName}`)
  }

  return (
    <div className="container mx-auto text-white pt-20 pb-20">
      <div className="bg-slate-900 shadow-lg shadow-slate-900/50 w-96 mx-auto  rounded-lg p-8 ">
        <h3 className="text-center text-3xl font-bold my-8">Merge String</h3>
        <form onSubmit={submitHandler}>
          <label className="font-semibold">First Name</label>
          <input
            className="w-full my-3 text-md text-black px-4 py-2 rounded-xl"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label className="font-semibold">Last Name</label>
          <input
            className="w-full my-3 text-md text-black px-4 py-2 rounded-xl"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <button className="bg-sky-500 w-full text-lg font-semibold py-2 rounded-xl my-5">
            Merge
          </button>
        </form>
      </div>
      <div className="mt-5 bg-slate-900 shadow-lg shadow-slate-900/50 w-96 mx-auto  rounded-lg p-8 ">
        <h3 className="text-center font-semibold text-xl">
          Output : {fullName ? fullName : '...'}
        </h3>
      </div>
    </div>
  )
}

export default MergeString
