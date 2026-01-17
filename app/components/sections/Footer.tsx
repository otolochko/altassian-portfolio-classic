const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-center text-slate-500">
      <p className="text-sm font-medium text-slate-700">
        © {currentYear} Oleksandr Tolochko
      </p>
    </footer>
  );
};

export default Footer;