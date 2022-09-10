import { useEffect, useState } from "react";
import { Channel } from "../store/app/types";
import { useDispatch, useSelect } from "../store/hooks";
import { supabase } from "../supabase/supabase";

export function useChannels() {
  const [loading, setLoading] = useState<boolean>(false);
  const { auth, app } = useSelect();
  const dispatch = useDispatch();

  async function fetchChannels() {
    setLoading(true);
    const { data, error } = await supabase.rpc<Channel>('fetch_channels', {
      user_id_: auth.session?.user?.id
    });
    setLoading(false);

    if(Array.isArray(data)) {
      dispatch({ type: 'STORE_CHANNELS', payload: data });
    }
    console.log(data);
    console.log(error);
  };

  useEffect(() => {
    const subscription = supabase
      .from('membership')
      .on('*', (_payload) => fetchChannels())
      .subscribe();

    fetchChannels();

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  const channels = app.channels;

  return { channels, loading };
};