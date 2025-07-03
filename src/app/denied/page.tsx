export default function AccessDenied() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Access Denied</h1>
      <p className="text-lg md:text-xl max-w-xl mb-10">
        Sorry, Ava’s brain is exclusive. You’ll need a <span className="text-[#D8C9B4] font-semibold">@abodie.co</span> email to connect.
      </p>
      <p className="text-sm text-gray-400">Nice try though. We respect the hustle.</p>
    </div>
  );
}
