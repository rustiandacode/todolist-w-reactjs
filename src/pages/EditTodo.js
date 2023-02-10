export default function EditTodo() {
  return (
    <div className=" p-20 z-10 -mt-20">
      <div className="w-96 lg:1/3 mx-auto bg-slate-900 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-center">Your To Do List</h3>
        <form>
          <div className="flex justify-evenly mt-8 mb-5">
            <input
              className="rounded-lg w-full px-4 py-2 text-md font-semibold text-slate-900"
              type="text"
              placeholder="Enter your task here"
              autoFocus
            />
            <button className="gradient-blue px-4 py-2 text-md font-semibold ml-2 rounded-lg ">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
