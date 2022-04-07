import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div>
      <div className='w-64 mx-8 my-8'>
        {/* <div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
        <div class='flex-shrink-0'>
          <img class='h-12 w-12' src='/img/logo.svg' alt='ChitChat Logo' />
        </div>
        <div>
          <div class='text-xl font-medium text-black'>ChitChat</div>
          <p class='text-gray-500'>You have a new message!</p>
        </div>
      </div>

      <form>
        <input class='border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
        <button class='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'>
          Sign up
        </button>
      </form>

      <button class='bg-green-500 active:bg-green-700'>Click me</button> */}

        <div className='group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent'>
          <p className='text-indigo-600 group-hover:text-gray-900'>
            New Project
          </p>
          <p className='text-indigo-500 group-hover:text-gray-500'>
            Create a new project from a variety of starting templates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
