import { useEffect, useState } from "react";
import axios from "axios";
import "./AdviceCard.css";

export const AdviceCard = () => {
  const [advice, setAdvice] = useState<string>("");
  const [slipId, setSlipId] = useState<number>(0);

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const newAdvice: SlipObject = response.data["slip"];
    console.log(newAdvice);
    setAdvice(newAdvice.advice);
    setSlipId(newAdvice.id);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  const divider = <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>

  return (
    <div className="AdviceCard">
      <div className="advice-info">Advice # {slipId}</div>
      <div className="advice">"{advice}"</div>
      <div className="divider">
       {divider}
      </div>
      <button className="advice-button" onClick={getAdvice}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>
    </div>
  );
};

interface SlipObject {
  id: number;
  advice: string;
}
