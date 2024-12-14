
export interface FileExplorer {
    id: string,
    type: string,
    name: string,
    meta?: string,
    data?: Array<FileExplorer>
}


const getFileExplorerData = (): FileExplorer => {
    
    const fileExplorerData: FileExplorer = {
        "id": "1",
        "type": "folder",
        "name": "parent",
        "data": [
            {
                "id": "2",
                "type": "folder",
                "name": "root",
                "data": [
                    {
                        "id": "3",
                        "type": "folder",
                        "name": "src",
                        "data": [
                            {
                                "id":"12",
                                "type": "file",
                                "meta": "js",
                                "name": "index.js"
                            }
                        ]
                    },
                    {
                        "id": "4",
                        "type": "folder",
                        "name": "public",
                        "data": [
                            {
                                "id":"10",
                                "type": "file",
                                "meta": "ts",
                                "name": "index.ts"
                            }
                        ]
                    },
                    {
                        "id": "5",
                        "type": "file",
                        "meta": "html",
                        "name": "index.html"
                    },
                    {
                        "id": "6",
                        "type": "folder",
                        "name": "data",
                        "data": [
                            {
                                "id": "7",
                                "type": "folder",
                                "name": "images",
                                "data": [
                                    {
                                        "id": "11",
                                        "type": "file",
                                        "meta": "img",
                                        "name": "image.png"
                                    }
                                ]
                            },
                            {
                                "id": "8",
                                "type": "file",
                                "meta": "img",
                                "name": "image2.webp"
                            }
                        ]
                    },
                    {
                        "id": "9",
                        "type": "file",
                        "meta": "svg",
                        "name": "logo.svg"
                    }
                ]
            }
        ]
    }

    return fileExplorerData
}

export default getFileExplorerData
    