export function Avatar({ name, w, h }: { name: string; w: string; h: string }) {
    const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
    return (
        <div className={`relative inline-flex items-center justify-center ${w} ${h} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-medium text-xs text-gray-600 dark:text-gray-300">{initials}</span>
        </div>
    )
}