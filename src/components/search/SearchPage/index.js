// import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
// import Navigation from "@/components/Navigation";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs,TabsTrigger,TabsList,TabsContent } from "@radix-ui/react-tabs";

const tokens = [
  { symbol: "OP", name: "Optimism", price: "$0.25", type: "shout", icon: "OP" },
  { symbol: "TON", name: "TON", price: "$3.50", type: "shout", icon: "TON" },
  { symbol: "BASE", name: "BASE", price: "$50", type: "shout", icon: "BASE" },
  { symbol: "TON", name: "TON", price: "$20", type: "whisper", icon: "TON" },
  { symbol: "ETH", name: "ETH", price: "$50", type: "whisper", icon: "ETH" },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col">
      <div className="flex-1 p-6 max-w-lg mx-auto w-full">
        {/* Search Bar with Material elevation */}
        <div className="relative mb-8">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8E9196] h-5 w-5" />
          <input
            type="text"
            placeholder="0x67j6D4Kogj7Vu9Dsn7Y39f"
            className="pl-12 pr-4 py-4 w-full rounded-full border-none bg-white shadow-md hover:shadow-lg transition-shadow duration-200 focus:ring-2 focus:ring-[#9b87f5] focus:ring-opacity-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tabs with Material Design styling */}
        <Tabs defaultValue="send" className="mb-8">
          <TabsList className="w-full grid grid-cols-2 gap-4 bg-transparent border-b border-[#F1F0FB] mb-6">
            <TabsTrigger 
              value="send"
              className="text-base font-medium px-4 py-3 data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all duration-200"
            >
              Send a Message
            </TabsTrigger>
            <TabsTrigger 
              value="wall"
              className="text-base font-medium px-4 py-3 text-[#8E9196] data-[state=active]:text-[#9b87f5] data-[state=active]:border-b-2 data-[state=active]:border-[#9b87f5] data-[state=active]:shadow-none data-[state=active]:bg-transparent transition-all duration-200"
            >
              Message Wall
            </TabsTrigger>
          </TabsList>
          <TabsContent value="send">
            <div className="space-y-8">
              {/* Shout Section */}
              <div>
                <h2 className="text-lg font-medium mb-4 text-[#1A1F2C]">Shout</h2>
                <div className="space-y-3">
                  {tokens
                    .filter((token) => token.type === "shout")
                    .map((token, index) => (
                      <div
                        key={`${token.symbol}-${index}`}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium shadow-sm ${
                              token.symbol === "OP"
                                ? "bg-[#D946EF]"
                                : token.symbol === "TON"
                                ? "bg-[#9b87f5]"
                                : "bg-[#0EA5E9]"
                            }`}
                          >
                            {token.icon}
                          </div>
                          <div>
                            <div className="font-medium text-[#1A1F2C]">{token.name}</div>
                            <div className="text-[#8E9196] text-sm">{token.price}</div>
                          </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-[#9b87f5]"></div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Whisper Section */}
              <div>
                <h2 className="text-lg font-medium mb-4 text-[#1A1F2C]">Whisper</h2>
                <div className="space-y-3">
                  {tokens
                    .filter((token) => token.type === "whisper")
                    .map((token, index) => (
                      <div
                        key={`${token.symbol}-${index}`}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium shadow-sm ${
                              token.symbol === "ETH" ? "bg-[#403E43]" : "bg-[#9b87f5]"
                            }`}
                          >
                            {token.icon}
                          </div>
                          <div>
                            <div className="font-medium text-[#1A1F2C]">{token.name}</div>
                            <div className="text-[#8E9196] text-sm">{token.price}</div>
                          </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-[#403E43]"></div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="wall">
            <div className="text-center text-[#8E9196] py-8 bg-white rounded-lg shadow-sm">
              Message Wall Content
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* <Navigation /> */}
    </div>
  );



};

export default SearchPage;

// return(
//     <p>this is searchpage</p>
// )