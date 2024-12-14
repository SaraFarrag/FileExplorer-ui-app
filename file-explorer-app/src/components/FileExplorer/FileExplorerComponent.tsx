import React from 'react';
import { FileExplorer } from '../../service/FileExplorerService';
import '../../App.css';
import file from '../../images/file.svg';
import folder from '../../images/folder.svg';
import useFileExplorer from './useFileExplorer';
import RightMenuComponent from '../RightMenu/RightMenuComponent';

const FileExplorerComponent: React.FC = () => {


  const {openRightMenu, handleFolderExpansion,onChangeActiveFile,
      foldersRef, filesRef, fileExplorerData, fileName } = useFileExplorer();
  

  const checkFolderStructure = (dataArray: FileExplorer) =>{

    if(dataArray.type === "file") 
      return <li 
                ref={el => filesRef.current.push(el)} 
                id={dataArray.id} 
                onClick={()=>onChangeActiveFile(dataArray.id)} 
                onContextMenu={()=>openRightMenu(dataArray.name)}>
                  <img className="file-icon" alt="file-icon" src={file}/>
                  <span>{dataArray.name}</span>
              </li>

    else 
      return (
        <>
        <li onClick={(e)=> handleFolderExpansion(e, dataArray.id)} >
          <img className="folder-icon" alt="folder-icon" src={folder}/>
          <span>{dataArray.name}</span>
        </li>
        <ul 
          ref={el => foldersRef.current.push(el)} 
          id={dataArray.id}>
          {dataArray.data?.map(innerElement => (
            checkFolderStructure(innerElement)     
          ))}
        </ul>
        </>
      )
  }
 
   return (
      <>
          <RightMenuComponent fileName={fileName}/>
          <li onClick={(e) =>handleFolderExpansion(e, fileExplorerData.id)}>
              <img src={folder} className="folder-icon" alt="folder-icon"/>
              <span>{fileExplorerData.name}</span>
          </li>
          <ul 
            ref={el => foldersRef.current.push(el)} 
            id={fileExplorerData.id}>
            {fileExplorerData.data?.map(innerElement => (
                checkFolderStructure(innerElement)     
            ))}
          </ul> 
      </>
  );
}

export default FileExplorerComponent;
