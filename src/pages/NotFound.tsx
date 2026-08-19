import { Link } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";
import EmptyState from "../components/EmptyState";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="section-pad flex min-h-[70vh] items-center pt-32">
      <div className="container-x">
        <EmptyState
          icon={<HiOutlineEmojiSad />}
          title="404 — This page took the night off"
          description="The page you're looking for doesn't exist. Let's get you back to the party."
          action={
            <Link to="/">
              <Button variant="gold">Back Home</Button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default NotFound;
