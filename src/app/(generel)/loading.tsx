export default function Loading() {
    return (
        <div className="w-full
                        h-[50vh]
                        grid place-items-center">
            <div className="bg-loading w-1/3 lg:w-40 aspect-square animate-spin"></div>
        </div>
    )
}