import React, { useState } from 'react'

const FormWithFunction = () => {
  const [firstName, setFirtsName] = useState('')
  const [lastName, setLastsName] = useState('')
  const [FullName, setFullName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(FullName)
    setFullName(firstName + ' ' + lastName)
  }

  return (
    <div className="container mx-auto text-white pt-20">
      <div className="w-96 mx-auto shadow-lg px-6 py-10 rounded-xl bg-slate-900">
        <h3 className="text-center font-semibold  text-2xl">Merge String</h3>
        <form onSubmit={submitHandler}>
          <label>First Name</label>
          <input
            className="w-full rounded-lg py-2 px-4 my-2 text-slate-800"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirtsName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            className="w-full rounded-lg py-2 px-4 my-2 text-slate-800"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastsName(e.target.value)}
          />

          <div className="w-full mt-3 flex">
            <button className="bg-sky-500 w-full px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-96 mx-auto shadow-lg mt-3 px-5 py-8 rounded-xl bg-slate-900">
        <p className="font-semibold text-xl text-center">
          My Name is {FullName ? FullName : '...'}
        </p>
      </div>
    </div>
  )
}

export default FormWithFunction
