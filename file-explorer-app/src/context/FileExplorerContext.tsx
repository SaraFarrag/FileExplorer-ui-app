import React, { createContext, useState } from 'react';

// Define the shape of the context data
export interface FileExplorerContextType {
  showPopup: boolean;
  togglePopup: () => void;
}

export const FileExplorerContext = createContext<FileExplorerContextType>({
  showPopup: false,
  togglePopup: () => {}
});

interface Props {
  children: React.ReactNode
}


export const FileExplorerProvider= ({ children }: Props) => {
  const [popupStatus, setPopupStatus] = useState(false);

  const togglePopup = () => {
    setPopupStatus((status) => !status);
  };

  return (
    <FileExplorerContext.Provider value={{ showPopup: popupStatus, togglePopup}}>
          {children}
    </FileExplorerContext.Provider>
      
  );
};
