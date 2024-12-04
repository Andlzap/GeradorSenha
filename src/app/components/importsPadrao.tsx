import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SlArrowDown } from "react-icons/sl";
import axios from 'axios';
import validator from 'validator';
import PropTypes from 'prop-types';
import BackgroundVideo from "@/app/components/BackgroundVideo";
import Loading from "./loading";
import LoadingLogado from "./loadingLogado";


import Modal from 'react-modal';

const imports = {
    React, useEffect, useState, motion, AnimatePresence, useForm, Link, useRouter, SlArrowDown, axios, PropTypes, Modal,  validator, BackgroundVideo, Loading, LoadingLogado, useCallback
};

export default imports;