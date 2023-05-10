declare function fetch(): Promise<Promise<string>>

type FetchResult = Awaited<ReturnType<typeof fetch>>
