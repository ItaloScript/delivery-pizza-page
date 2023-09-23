import Topbar from "@/components/top-bar";



function ResponsiveAppBar({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
export default ResponsiveAppBar;