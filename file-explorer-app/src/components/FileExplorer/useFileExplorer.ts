import React, {useState, useRef, useContext} from 'react';
import getFileExplorerData from "../../service/FileExplorerService";
import { FileExplorerContext, FileExplorerContextType } from '../../context/FileExplorerContext';

const useFileExplorer = () =>{

    const [fileExplorerData, setFileExplorerData] = useState(getFileExplorerData());
    const foldersRef = useRef<(HTMLUListElement | null)[]>([]);
    const filesRef = useRef<(HTMLLIElement | null)[]>([]);
    const [fileName, setFileName] = useState('');
    const {togglePopup} = useContext(FileExplorerContext) as FileExplorerContextType;
    
    

    const handleFolderExpansion = (e: React.MouseEvent<HTMLElement>, id: string): any =>{

        const uniqueRefs = foldersRef.current.filter((obj, index, self) =>
          index === self.findIndex((t) => t?.id === obj?.id)
        ).filter(el => el);
    
        uniqueRefs.forEach(ref =>{
          if(ref?.id === id){
            if(ref?.style.display === "block"){
              ref!.style.display = "none";
            }
            else
              ref!.style.display = "block";
          }
        }) 
      }
    
      const openRightMenu = (name: string) =>{
          togglePopup();
          setFileName(name);
      }

      const onChangeActiveFile = (id: string)=>{
        const uniqueRefs = filesRef.current.filter((obj, index, self) =>
          index === self.findIndex((t) => t?.id === obj?.id)
        ).filter(el => el);
    
        uniqueRefs.forEach(ref =>{
          if(ref?.id === id)
              ref!.style.color = "red";
          else
              ref!.style.color = "black";
          
        }) 
      }

      return {
        handleFolderExpansion,
        openRightMenu, 
        onChangeActiveFile,
        foldersRef, 
        fileExplorerData, 
        fileName, 
        filesRef};
}

export default useFileExplorer;