import CommentBox from "@/components/CommentBox";
import Footer from "@/components/Footer";
import GamesCard from "@/components/GamesCard";
import HistoryVersion from "@/components/HistoryVersion";
export default function Game() {
  return (
    <div>
      <GamesCard />
      <HistoryVersion />
      <CommentBox />
      <Footer />
    </div>
  );
}
