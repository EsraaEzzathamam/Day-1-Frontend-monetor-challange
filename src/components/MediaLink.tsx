import Link from "next/link";

interface MediaLinkProps {
  linkData: { title: string; link: string };
}
const CustomLink = ({ linkData }: MediaLinkProps) => {
  return (
    <>
      <Link
        href={linkData.link}
        target="_blank"
        className="bg-grey-1 p-4 rounded-2xl flex flex-col items-center justify-center m-2 w-full hover:shadow-xl hover:bg-gray-500"
      >
        <div>{linkData.title}</div>
      </Link>
    </>
  );
};
export default CustomLink;
