import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

export function Pagination() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            className={`
              block py-2 px-3 ml-0 leading-tight
              text-gray-500 bg-white rounded-l-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700

            `}
          >
            <span className="sr-only">Previous</span>
            <MdArrowBackIosNew size={16} />
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`
              py-2 px-3 leading-tight
              text-gray-500 bg-white border border-gray-300
              hover:bg-gray-100 hover:text-gray-700

            `}
          >
            1
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`
              py-2 px-3 leading-tight text-gray-500 bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700

            `}
          >
            2
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            className={`
              z-10 py-2 px-3 leading-tight
              border border-blue-300
              text-blue-600 bg-blue-50
              hover:bg-blue-100 hover:text-blue-700
            `}
          >
            3
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`
              py-2 px-3 leading-tight
              text-gray-500 bg-white border border-gray-300
              hover:bg-gray-100 hover:text-gray-700

            `}
          >
            4
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`
              py-2 px-3 leading-tight text-gray-500 bg-white
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700

            `}
          >
            5
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`
              block py-2 px-3 leading-tight
              text-gray-500 bg-white rounded-r-lg
              border border-gray-300
              hover:bg-gray-100 hover:text-gray-700
            `}
          >
            <span className="sr-only">Next</span>
            <MdArrowForwardIos size={16} />
          </a>
        </li>
      </ul>
    </nav>
  )
}
