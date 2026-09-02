import { ImageResponse } from "next/og";
import { NOME_NEGOCIO } from "./data/site";

// Imagem de pré-visualização mostrada ao partilhar o link (WhatsApp, Facebook…).
// Gerada em código com a paleta da marca — sem ficheiro de imagem nem fontes extra.
export const alt = "Fina Depilações — Salão de estética e depilação em Maputo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "#fffaf9",
          color: "#3d1a22",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c9a869",
          }}
        >
          Salão de Estética · Maputo
        </div>
        <div
          style={{
            fontSize: 124,
            fontWeight: 700,
            color: "#8a4a5c",
            marginTop: 24,
          }}
        >
          {NOME_NEGOCIO}
        </div>
        <div
          style={{ width: 160, height: 6, background: "#c9a869", marginTop: 40 }}
        />
        <div style={{ fontSize: 40, color: "#5f4a54", marginTop: 40 }}>
          Depilação com cuidado e elegância
        </div>
      </div>
    ),
    size
  );
}
