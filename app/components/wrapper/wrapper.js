export default function Wrapper({ children }) {
  return (
    <div className="max-w-100  m-auto px-10 min-h-screen flex flex-col max-sm:px-6">
      {' '}
      {children}{' '}
    </div>
  );
}
