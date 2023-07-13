import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
import useSWR from "swr";
import styled from "styled-components";

export default function ProfilePage() {
  const router = useRouter();
  const { profileId } = router.query;

  const { data, isLoading } = useSWR(`/api/players/${profileId}`);
  if (!profileId) {
    return <h2>Loading...</h2>;
  }
  if (isLoading) {
    return <h2>...Data is Loading</h2>;
  }

  return (
    <>
      <p>Hello {data.name}</p>
    </>
  );
}
