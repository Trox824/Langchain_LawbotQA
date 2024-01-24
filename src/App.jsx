import PromptMessage from "./components/PromptMessage";
import SideBar from "./components/SideBar";
import Search from "./components/search";
import { NodeContext, NodeContextProvider } from "./components/QueryContext";
function App() {
  return (
    <NodeContextProvider>
      <div className="bg-slate-200">
      <div className="h-screen max-h-screen max-w-screen-2xl mx-auto overscroll-none ">
        <div className="flex flex-row justify-between items-center">
          {/* left component */}
          <div>
            <SideBar />
          </div>
          {/* right component */}
          {/* <div className="mt-4 grid grid-rows-9 mx-auto rounded-xl w-[60rem]">
            <div className="row-start-1 row-span-8 mb-9 bg-slate-50 overflow-y-auto max-h-screen-xl h- rounded-xl text-base ring-1 ring-slate-200/10">
              <PromptMessage />
            </div>
            <div className="flex justify-center">
              <Search />
            </div>
          </div> */}
          <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto max-h-screen-xl my-auto">
            <div className="relative bg-slate-50 overflow-y-auto mx-24 rounded-xl min-h-max lg:h-[50rem] md:h-[40rem] sm:h-[40rem] -translate-y-4 w-full">
              <div className="absolute top-0 left-0 px-10 py-5">
              <PromptMessage />
              </div>
              {/* <div className="block">
                <div className="m-4 p-2 max-w-screen-md ">
                   
                </div>
              </div>  
                 */}
                
            </div>
             
            <div className="py-2">
              <Search />
            </div>
          </div>

          
        </div>
      </div>
      </div>
      
    </NodeContextProvider>
  );
}

export default App;
