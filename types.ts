
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Product {
  id: string;
  name: string;
  name_no?: string;
  tagline: string;
  tagline_no?: string;
  description: string;
  description_no?: string;
  longDescription?: string;
  longDescription_no?: string;
  price: number;
  displayPrice?: string;
  displayPrice_no?: string;
  category: string;
  category_no?: string;
  imageUrl: string;
  gallery?: string[];
  features: string[];
  features_no?: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  title_no?: string;
  date: string;
  date_no?: string;
  excerpt: string;
  excerpt_no?: string;
  image: string;
  content: React.ReactNode;
  content_no?: React.ReactNode;
}

export interface FlowTool {
  id: string;
  title: string;
  title_no?: string;
  description: string;
  description_no?: string;
  slug: string;
}

export interface RecommendedTool {
  id: string;
  name: string;
  description: string;
  description_no?: string;
  category: string;
  category_no?: string;
  imageUrl: string;
  detailedContent?: React.ReactNode;
  detailedContent_no?: React.ReactNode;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'tools' } 
  | { type: 'recommended-tools' } 
  | { type: 'recommended-tool-detail', toolId: string }
  | { type: 'flow-tools' }
  | { type: 'flow-tool-detail', toolId: string }
  | { type: 'knowledge' }
  | { type: 'about' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' };
