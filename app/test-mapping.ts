import { createRepository } from "./useRepository.ts";
import { $fetch } from "ofetch";

const repo = await createRepository("shared-correspondences", $fetch);
repo.createSharedcorrespondences;
