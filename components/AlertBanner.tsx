'use client'

import React from 'react'

export function AlertBanner() {
  return (
    <div className="mt-12 w-fit mx-auto rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/50 dark:bg-emerald-900/20">
      <div className="flex items-center px-2">
        <div className="flex-shrink-0 ml-3">
          <svg className="h-8 w-8 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="-mt-3 m-3">
          <h3 className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Development in Progress</h3>
          <div className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">
            The docs are under heavy development. We're working hard to improve the docs. If you have any questions or feedback, please reach out to us.
          </div>
        </div>
      </div>
    </div>
  )
}
