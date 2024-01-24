import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const NodeContext = createContext("");
const NodeContextProvider = ({ children }) => {
  const [Query, SetQuery] = useState(null);
  const [ModelResponse, SetModelResponse] = useState(null);
  const [Messages, SetMessages] = useState([]);
  return (
    <NodeContext.Provider
      value={{
        Query,
        SetQuery,
        ModelResponse,
        SetModelResponse,
        Messages,
        SetMessages,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};

const UseNodeContext = () => {
  return useContext(NodeContext);
};

export { NodeContextProvider, UseNodeContext, NodeContext };
