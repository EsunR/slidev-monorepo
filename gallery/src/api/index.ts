import { AxiosResponse } from "axios";
import service from "../utils/service";
import { GetSlidesRes } from "./types";
import { GET_SLIDES_API } from "./url";

export async function getSlides() {
  return (await service.get(GET_SLIDES_API)) as AxiosResponse<GetSlidesRes>;
}
