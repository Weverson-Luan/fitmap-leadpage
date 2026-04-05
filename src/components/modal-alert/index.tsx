import React from "react";
import Modal from "react-modal";
import { Smartphone, Star } from "lucide-react";
import { Button } from "../ui/button";

Modal.setAppElement("#root");


type Props = {
  name: string
  role: string
  image: string
  text: string
}

export function TestimonialCard({ name, role, image, text }: Props) {
  return (
    <div className="bg-black border-green-500/40 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">

      <div className="p-6 flex flex-col gap-6">

        {/* estrelas */}
        <div className="flex gap-1 text-green-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        {/* texto */}
        <p className="text-white/80 leading-relaxed">
          "{text}"
        </p>

        {/* usuário */}
        <div className="flex items-center gap-3 mt-2">
          <img
            src={image}
            className="w-10 h-10 rounded-full border-2 border-green-500"
          />

          <div>
            <p className="text-white font-medium">{name}</p>
            <p className="text-white/50 text-sm">{role}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export function DownloadAppModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-black gap-2 px-8"
        onClick={() => setOpen(true)}
      >
        Baixar para Android
        <Smartphone className="w-5 h-5" />
      </Button>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          },
          content: {
            position: "relative",
            inset: "unset",
            border: "none",
            borderRadius: "10px",
            padding: "24px",
            maxWidth: "420px",
            width: "100%",

          },
        }}
      >
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-green-500/10 p-2 rounded-md">
            <Smartphone className="w-5 h-5 text-green-500" />
          </div>

          <h3 className="text-lg font-medium text-gray-900" style={{ marginTop: 5, marginLeft: 10 }}>
            Instalar o FitMap
          </h3>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed">
          O FitMap ainda não está disponível na Play Store.
          O download é feito diretamente pelo nosso site.
          Quando o Android solicitar, permita a instalação do aplicativo.
        </p>

        <p className="text-xs text-gray-400 mt-2">
          O aplicativo é seguro e assinado digitalmente.
        </p>

        <div className="w-full flex justify-between gap-2 mt-6" style={{ marginTop: 12 }}>

          <Button
            className="w-full"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>

          <a
            href="https://play.google.com/store/apps/details?id=br.com.fitsmap.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-green-500 hover:bg-green-600 text-black gap-2">
              <Smartphone className="w-4 h-4" />
              Play Store
            </Button>
          </a>
        </div>
      </Modal>
    </>
  );
}