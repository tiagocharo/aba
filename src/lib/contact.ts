import { siteConfig } from "./content";

export type ContactFormData = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  message: string;
};

export function buildContactMailto(form: ContactFormData): string {
  const subject = encodeURIComponent(
    `[ABA] Contato — ${form.company || form.name}`,
  );
  const body = encodeURIComponent(
    [
      `Nome: ${form.name}`,
      `Empresa: ${form.company}`,
      `Cargo: ${form.role}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`,
      "",
      form.message,
    ].join("\n"),
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
