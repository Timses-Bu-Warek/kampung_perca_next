import Link from "next/link"

export default function Breadcrumbs(context : { params : {slug: string} }) {
    return (
        <div className="container py-4 flex items-center gap-4">
            <Link href="/" className="text-primary text-base" passHref>
                <i className="fas fa-home"></i>
            </Link>
            <span className="text-sm text-gray-400">
                <i className="fas fa-chevron-right"></i>
            </span>
            <p className="text-gray-600 font-medium">{context.params.slug}</p>
        </div>
    )
}
