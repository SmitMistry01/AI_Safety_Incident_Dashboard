const data = [
  {
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T100000Z",
  },
  {
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T143000Z",
  },
  {
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T091500Z",
  },
];

export const setLocalStorage = () => {
  if(localStorage.getItem("data")===null){
    localStorage.setItem("data", JSON.stringify(data));
  }
};

export const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("data") || "[]");
  return data;
};
