import {
  MessageSquare,
  FileText,
  Wrench,
  CheckCircle
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    icon: <MessageSquare size={28} />,
    title: "Anfrage"
  },
  {
    number: "02",
    icon: <FileText size={28} />,
    title: "Angebot"
  },
  {
    number: "03",
    icon: <Wrench size={28} />,
    title: "Ausführung"
  },
  {
    number: "04",
    icon: <CheckCircle size={28} />,
    title: "Fertigstellung"
  }
];