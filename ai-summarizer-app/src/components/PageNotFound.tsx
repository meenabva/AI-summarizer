import React from "react"

const ErrorPage = () => {
    return(
        <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight text-purple-600 lg:text-9xl">404</h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Page not found.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">The link doesn't exist</p>
            </div>
        </div>
        </section>
    )
}

export default ErrorPage