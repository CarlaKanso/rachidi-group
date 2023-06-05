import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/router";

export function withAuth(Component) {
  return function WithAuth(props) {
    const auth = useAuth();

    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const isNotAllowed = !auth.user;
    useEffect(() => {
      setLoading(auth.loading);
      if (!loading && isNotAllowed) {
        router.replace("/login");
      }
    }, [auth, isNotAllowed, router, loading]);

    if (loading || isNotAllowed) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}

export function withGuest(Component) {
  return function WithGuest(props) {
    const auth = useAuth();

    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const isNotAllowed = !!auth.user;
    useEffect(() => {
      setLoading(auth.loading);
      if (!loading && isNotAllowed) {
        router.replace("/");
      }
    }, [auth, isNotAllowed, router, loading]);

    if (loading || isNotAllowed) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}

export const ALLOWED_EMAILS = ["carla_kanso23@outlook.com"];

export function withAdmin(Component) {
  return function WithAdmin(props) {
    const auth = useAuth();

    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const isNotAllowed = ALLOWED_EMAILS.indexOf(auth?.user?.email) < 0;
    useEffect(() => {
      setLoading(auth.loading);
      if (!loading && isNotAllowed) {
        router.replace("/");
      }
    }, [auth, isNotAllowed, router, loading]);

    if (loading || isNotAllowed) {
      return <div>Loading...</div>;
    }

    return <Component {...props} />;
  };
}
